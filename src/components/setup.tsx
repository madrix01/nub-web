import "./home.css"
import Cookies from "js-cookie";

export function Setup() {

    const setupData = async (event: any) => {
        const gistId = event.target.gistId.value;
        const token = event.target.token.value; 
        Cookies.set("ghtoken", token);
        Cookies.set("gistId", gistId);
        Cookies.set("isVerified", "true");
        alert("Info saved to cookies")
        // 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
    }

    return (
        <div className="setup-main">
            <form onSubmit={setupData}>
                <input type="text" id="gistId" className="setup-input" placeholder="Gist Id" />
                <input type="password" id="token" className="setup-input" placeholder="Token"/>
                <button type="submit" className="setup-button">Add gist</button>    
            </form> 
        </div>
    )
}