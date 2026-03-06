import {Window, Deco, Content} from "../styling/WindowStyles.tsx";
import {Main, MainLink, VBox, HBox, Tag} from "../styling/MainStyles.tsx";

export default function Games() {
    return (
      <Main>
          <Window>
              <Deco/>
              <Content>
                  <h1><u>Games</u></h1>
                  <VBox>
                      <HBox>
                          <img src="/springarms.png" alt="pixel-art text reading 'coming soon'"/>
                          <div>
                              <h2>Spring Arms</h2>
                              <Tag>Godot</Tag>
                              <Tag>Solo</Tag>
                              <br/>
                              <p>A work-in-progress, physics-based 2D platformer about a character with springs for arms</p>
                              <MainLink to={"https://github.com/gracedes/spring-arms"} target={"_blank"}>github</MainLink>
                          </div>
                      </HBox>
                      <HBox>
                          <img src="/doors.png" alt="a tile-based puzzle game UI"/>
                          <div>
                              <h2>Doors</h2>
                              <Tag>Godot</Tag>
                              <Tag>Group</Tag>
                              <Tag>Game Jam</Tag>
                              <br/>
                              <p>A tile placement puzzle game made with friends for Brackeys Game Jam 2024.1</p>
                              <MainLink to={"https://robotabc773.itch.io/doors"} target={"_blank"}>itch.io</MainLink>
                              <MainLink to={"https://github.com/selenexwu/Brackeys2024.1"} target={"_blank"}>github</MainLink>
                          </div>
                      </HBox>
                      <HBox>
                          <img src="/hand.png" alt="a pixel-art character standing next to a large fire"/>
                          <div>
                              <h2>Hand of the Gods</h2>
                              <Tag>Godot</Tag>
                              <Tag>Solo</Tag>
                              <Tag>Game Jam</Tag>
                              <br/>
                              <p>2D puzzle platformer designed around managing a hand of ability cards</p>
                              <MainLink to={"https://gamesbygrace.itch.io/hand-of-the-gods"} target={"_blank"}>itch.io</MainLink>
                              <MainLink to={"https://github.com/gracedes/card-platformer"} target={"_blank"}>github</MainLink>
                          </div>
                      </HBox>
                      <HBox>
                          <img src="/forthcoming.png" alt="a top-down view of a helmet-wearing character, a robot shooting at them, and a toxic waste barrel"/>
                          <div>
                              <h2>Forthcoming Danger</h2>
                              <Tag>Unity</Tag>
                              <Tag>Group</Tag>
                              <br/>
                              <p>A top-down shooter made as a demonstration and community project for BU Game Dev Club</p>
                              <MainLink to={"https://github.com/bugameclub/forthcoming-danger"} target={"_blank"}>github</MainLink>
                          </div>
                      </HBox>
                  </VBox>
              </Content>
          </Window>
      </Main>
    );
}