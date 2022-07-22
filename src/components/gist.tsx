import Cookies from "js-cookie"
import React, { useState } from "react";
import "./home.css"
import { Octokit } from "octokit";
import ReactMarkdown from "react-markdown";

const octokit = new Octokit({
    auth : Cookies.get().ghtoken
})

export function Gist() {
    const [gistData, setGistData] = useState("## No good request")

    async function get_gist() {
        const gistId = Cookies.get().gistId;

        const response: any = await octokit.request('GET /gists/{gist_id}', {
            gist_id: gistId
        })
        
        if (response.status === 200) {
            if (response.data !== undefined ) {
                setGistData(response.data.files["test.md"].content)
            }
        }
    }
    
    const x = get_gist()
    console.log(x)
    return(
        <div className="gist-main">
            <ReactMarkdown>
                {gistData}    
            </ReactMarkdown>  
        </div>
    )
}