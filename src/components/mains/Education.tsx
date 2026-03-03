export default function Education() {
    return (
        <main>
            <h1><u>Education</u></h1>
            <div id="vbox">
                <div className="hbox">
                    <img src="assets/bu-logo.png" alt="the Boston University seal"/>
                    <div>
                        <h2>Boston University</h2>
                        <p>B.A. in Computer Science</p>
                        <p><i>Expected Graduation: May 2027</i></p>
                    </div>
                </div>
                <div className="hbox">
                    <img src="assets/sjp-logo.png" alt="the seal for the high school Saint John's Prep"/>
                    <div>
                        <h2>St. John's Preparatory</h2>
                        <p>High School</p>
                        <p><i>Graduated 2022</i></p>
                    </div>
                </div>
            </div>
        </main>
    );
}