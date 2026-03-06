import {Window, Deco, Content} from "../styling/WindowStyles.tsx";
import {Main, VBox} from "../styling/MainStyles.tsx";

export default function Employment() {
    return (
      <Main>
          <Window>
              <Deco/>
              <Content>
                  <h1><u>Employment</u></h1>
                  <VBox>
                      <div>
                          <br/>
                          <h3>Student Accounting Services</h3>
                          <h4>Boston University</h4>
                          <p><i>September 2022 - December 2023</i></p>
                      </div>
                  </VBox>
              </Content>
          </Window>
      </Main>
);
}