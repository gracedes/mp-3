import {Window, Deco, Content} from "../styling/WindowStyles.tsx";
import {Main, VBox, HBox} from "../styling/MainStyles.tsx";

export default function Education() {
    // not all that different from Home, but now we introduce generic VBox and HBox styled divs
    // which just represent horizontal and vertical flex-box respectively
    return (
        <Main>
            <Window>
                <Deco/>
                <Content>
                    <h1><u>Education</u></h1>
                    <VBox>
                        <HBox>
                            <img src="/bu-logo.png" alt="the Boston University seal"/>
                            <div>
                                <h2>Boston University</h2>
                                <p>B.A. in Computer Science</p>
                                <p><i>Expected Graduation: May 2027</i></p>
                            </div>
                        </HBox>
                        <HBox>
                            <img src="/sjp-logo.png" alt="the seal for the high school Saint John's Prep"/>
                            <div>
                                <h2>St. John's Preparatory</h2>
                                <p>High School</p>
                                <p><i>Graduated 2022</i></p>
                            </div>
                        </HBox>
                    </VBox>
                </Content>
            </Window>
        </Main>
    );
}