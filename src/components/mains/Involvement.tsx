import {Window, Deco, Content} from "../styling/WindowStyles.tsx";
import {Main, VBox} from "../styling/MainStyles.tsx";

export default function Involvement() {
    return (
        <Main>
            <Window>
                <Deco/>
                <Content>
                    <h1><u>Involvement</u></h1>
                    <VBox>
                        <div>
                            <br/>
                            <h3>Game Development Club</h3>
                            <h4>Boston University</h4>
                            <br/>
                            <div className="hbox">
                                <div className="htext">
                                    <h4>President</h4>
                                    <p><i>2024 - 2025</i></p>
                                </div>
                                <div>
                                    <h4>Member</h4>
                                    <p><i>2022 - present</i></p>
                                </div>
                            </div>
                        </div>
                    </VBox>
                </Content>
            </Window>
        </Main>
    );
}