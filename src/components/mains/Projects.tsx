import {Window, Deco, Content} from "../styling/WindowStyles.tsx";
import {Main, MainLink, VBox, HBox, Tag} from "../styling/MainStyles.tsx";

export default function Projects() {
    return (
      <Main>
          <Window>
              <Deco/>
              <Content>
                  <h1><u>Projects</u></h1>
                  <VBox>
                      <HBox>
                          <img src="/harmonixr.gif"
                               alt="grid-based animation of pitches and chords in the form of squares lighting up to show the data being collected"/>
                          <div>
                              <h2>Harmonixr</h2>
                              <Tag>Python</Tag>
                              <Tag>AI/ML</Tag>
                              <Tag>Group</Tag>
                              <br/>
                              <p>MIDI interpretation tools leveraging deep neural networks to uncover hidden patterns in composition.</p>
                              <MainLink to={"https://github.com/user04f8/Harmonixr"} target={"_blank"}>github</MainLink>
                              <MainLink to={"https://youtu.be/fOh5c4mRAGI"} target={"_blank"}>youtube</MainLink>
                          </div>
                      </HBox>
                      <HBox>
                          <img src="/solarwise.jpg"
                               alt="a solar panel with text reading 'optimizing solar energy'"/>
                          <div>
                              <h2>SolarWise</h2>
                              <Tag>Python</Tag>
                              <Tag>AI/ML</Tag>
                              <Tag>Web</Tag>
                              <Tag>Hackathon</Tag>
                              <br/>
                              <p>Web app that makes weather forecast API calls and filters those through a machine
                                  learning model to give a predicted solar energy yield</p>
                              <MainLink to={"https://github.com/jazzmine-p/smart-energy-app"} target={"_blank"}>github</MainLink>
                              <MainLink to={"https://devpost.com/software/solar-wise-energy-forecast"} target={"_blank"}>devpost</MainLink>
                          </div>
                      </HBox>
                      {/* TODO: add calculator */}
                  </VBox>
              </Content>
          </Window>
      </Main>
    );
}