import React from "react";

const universeImage =
  "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80";
const lifeScience =
  "https://images.unsplash.com/photo-1539233406165-4a1007febe4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80";
const historyImage =
  "https://images.unsplash.com/photo-1461360370896-922624d12aa1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80";
const societyImage =
  "https://images.unsplash.com/photo-1568568756062-7ba6d2d4ac57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80";
const numbersImage =
  "https://images.unsplash.com/photo-1509869175650-a1d97972541a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80";

const Topics = () => {
  return (
    <div className="curriculum-wrapper">
      <div className="topic-content">
        <div className="heading-introduction">
          <h1 className="headding">Dr. Montessori’s Great Lessons</h1>

          <h3>
            Dr. Montessori uses the Five Great Lessons at the elementary levels
            as an introduction to all topics, providing a “big picture” to
            demonstrate how the sciences, art, history, language, and geography
            are interrelated. Students are then introduced to increasing levels
            of detail and complexity within these broad areas.
          </h3>
        </div>

        <div className="topics-information">
          <div className="topic-subheading">
            <h4>1 .“The Story of the Creation of the Universe.” Science</h4>
          </div>

          <div className="topic-information">
            <p className="info">
              This science tour describes how chemical elements such as Hidrogen
              exploded to form Helium and all other elements and minerals; how
              matter transforms to three states of solid, liquid, and gas; how
              particles joined together and formed the earth; how heavier
              particles sank to earth’s core and volcanoes erupted; how
              mountains were formed and the atmosphere condensed into rain,
              creating oceans, lakes, and rivers. Students are introduced to
              lessons in physics, astronomy, geology, and chemistry. For
              example, they learn about light, heat, convection currents,
              gravity, galaxies, planetary systems, Earth’s crust, volcanoes,
              erosion, climate, and physical geography. Then we relate that
              knowledge to the child through a study of the body's systems and
              our need for plants and animals.
            </p>

            <div className="list">
              <ul>
                <li>Astronomy (space)</li>
                <li>Chemistry (elements)</li>
                <li>Physics (properties)</li>
                <li>Geology (rocks)</li>
                <li>Meteorology (weather)</li>
                <li>Botany (plants)</li>
                <li>Zoology (animals)</li>
                <li>Anatomy (human body)</li>
              </ul>
            </div>
          </div>

          <div className="img-topic">
            <img src={universeImage} />
          </div>
        </div>

        <div className="topic-subheading">
          <h4>
            2. Life Science is presented through “The Story of the Coming of
            Life".
          </h4>
        </div>

        <div className="topic-information">
          <p className="info">
            Children imagine how single-cell and multicell forms of life became
            embedded in the bottom of the sea and formed fossils. The Paleozoic,
            Mesozoic, and Cenozoic periods are traced beginning with the kingdom
            of trilobites and ending with human beings. A timeline shows the
            beginning of invertebrates, followed by fish and plants, then
            amphibians, reptiles, and birds and mammals. Children can be
            certified as "pet sitters" and may be given a chance to take a pet
            with all its gear home for up to a month. Pets may include a beta or
            gold fish, a tarantula, a frog, a turtle, a snake, a parakete, a
            gerbill. The Montessori materials used include the Waseca biome
            maps, rugs, and cultural cards appropriate to the month of study.
          </p>

          <div className="list">
            <ul>
              <li>Plants and Agriculture, Europe</li>
              <li>Microorganisms and Tundra, Antarctica</li>
              <li>Fish and Oceans, Australia</li>
              <li>Reptiles and Desserts, Asia</li>
              <li>Dinosaurs and Anthropology</li>
              <li>Amphibians and Rainforests, South America</li>
              <li>Birds and Flight, North America</li>
              <li>Mammals and grasslands Africa</li>
            </ul>
          </div>
          <div className="img-topic">
            <img src={lifeScience} />
          </div>
        </div>

        <div className="topic-subheading">
          <h4>3. "The Story of Humans"</h4>
        </div>

        <div className="topic-information">
          <p className="info">
            Introduces human beings and their unique endowments of intellect and
            will. The aim is for the children to imagine what life was like for
            humans of the past. This is the basis for lessons the emergence of
            ancient civilizations up to our time. Students are introduced to an
            analytical tool to compare cultures, and how climate and topography
            influence culture and political geography. Students will create
            their own maps to take home. The maps may highlight political,
            physical, social, mathematical geography. Children may choose to
            check-out books, and flag making activities, along with other
            Montessori materials. Students may check-out a book from the
            historical time period to study.
          </p>

          <div className="list">
            <ul>
              <li>Africa and Ancient Egypt</li>
              <li>Asia and Ancient Chinese Inventions and numbers</li>
              <li>Middle East and the Ottoman Empire</li>
              <li>Europe and the Renaissance</li>
              <li>South America and Age of Exploration</li>
              <li>North America and Early American History</li>
              <li>Australia and the Pacific Islands</li>
              <li>Antarctica and Modern Science</li>
            </ul>
          </div>
        </div>

        <div className="img-topic">
          <img src={historyImage} />
        </div>
      </div>

      <div className="topic-subheading">
        <h4>4. "The Story of Language" </h4>
      </div>

      <div className="topic-information">
        <p className="info">
          Transports children to a time when people had to figure out how to
          comunicate an idea to another. We discuss the development of writing
          from its apperance in ancient cultures to its function in our society
          and most importantly in our personal lives. Our study takes us from
          ancient Egypt, cuneic form, to the rennaisance, the printing press and
          to our modern digital era
        </p>

        <div className="img-topic">
          <img src={societyImage} />
        </div>
      </div>

      <div className="topic-subheading">
        <h4>5. "The Story of Numbers"</h4>
      </div>

      <div className="topic-information">
        <p className="info">
          Is told to help children imagine what human needs led to the
          development of numbers. We will review early humans, sumatrans,
          egyptians, cuneic form. Children will learn one-to-one correspondance,
          imagine why our system is based on number 10, explore other math
          systems based on number 7. We will talk about how numbers and math
          were created to help people understand their world, and communicate
          better.
        </p>
      </div>
      <div className="img-topic">
        <img src={numbersImage} />
      </div>
    </div>
  );
};

export default Topics;
