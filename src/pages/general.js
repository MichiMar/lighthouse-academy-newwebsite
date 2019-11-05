import React from "react";
import Youtube from "react-youtube";

export default class MethodInfo extends React.Component {
  _onReady(event) {
    event.target.pauseVideo();
  }

  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVar: {
        autoplay: 1
      }
    };

    return (
      <div className="content-page-wrapper">
        <div className="title">
          <h1>Montessori System</h1>
        </div>

        <div className="text-content">
          <div className="video-YT">
            <Youtube
              videoId="GcgN0lEh5IA"
              opts={opts}
              onReady={this._onReady}
            />
          </div>

          <div>
            <p>
              What do the Prince of England, Hellen Keller, Alexander Graham
              Bell, Thomas Edison, Anne Frank, Henry Ford, Mahatma Gandhi and
              the founders of Google Larry Page and Sergey Bring and Amazon have
              in common? A Montessori-style early childhood education.
            </p>
            <p>
              These days innovation and technology are a hot subject-- and it is
              no secret that some of the most prominent creative minds mentioned
              earlier, such as the founders of Google credit their Montessori
              foundation for their ability to generate innovative solutions,
              foster peace, and think creatively. These are bright minds in the
              fields of technology, art, poetry, science, and social studies.
            </p>
            <p>
              The Montessori method is based on over a 100 years of
              clinically-proven research for effective learning and whole person
              development. ​At Lighthouse Montessori Academy, our mission is to
              support your child in his or her journey to keep the light
              burning!
            </p>
          </div>

          <h4 className="general-subtitle">What is Montessori?</h4>
          <div className="video-YT">
            <Youtube
              videoId="efCq_vHUMqs"
              opts={opts}
              onReady={this._onReady}
            />
          </div>
          <div>
            <p>
              Montessori is an philosophy of education, as well as a curriculum,
              and specialized materials, which capitalize student’s individual
              learning styles, developmental needs and interests. The method was
              developed by Italy's first femal physician. It is so effective, it
              has spread across the world.
            </p>
            <p>
              It is adaptable and proven. In other words, instead of trying to
              fit a circle in a square hole with a rigid curriculum, we provide
              a curriculum that fits the diversity of people’s learning styles
              and needs. It fulfills the needs because it was developed after
              painstaking observation of the planes of development of children,
              and it was crafted to fit and fulfill the needs of children. The
              curriculum is so effective and so adaptable, that the same
              curriculum has adapted to the needs of children all over the world
              over 100 years.
            </p>
            <p>
              For that same reason, it helps student succeed regardless of
              neural-diversity (delayed, special needs, normal, advanced,
              gifted).
            </p>
            <p>
              Harvard University has a Center for the Developing Child, where
              they conduct research and produce materials to support entities
              that seek optimal human development. The video bellow shocases a
              Montessori classroom, and how it helps children be ready to
              function well as adults.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
