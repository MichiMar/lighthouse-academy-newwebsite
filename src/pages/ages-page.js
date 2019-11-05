import React from "react";
import chilhoodImage from "../img/chilhood-age.jpg";
import elementaryAge from "../img/elementary-age.jpg";

const AgesPage = () => {
  return (
    <div className="age-page-wrapper">
      <h1>Early Childhood and Elementary</h1>
      <h3>
        Our Early Childhoo program is especially designed by experts in child
        development for children ages 3-6. We also have an Elementary group for
        children 6-12 years-old.{" "}
      </h3>

      <div className="age-period">
        <div>
          <h3>Early Childhood (3 to 6 years old)</h3>
        </div>
        <div>
          <p>
            The stage of development from ages 3-6 is referred to as "core
            phase" because it is central and fundamental to the rest of that
            individual's life. Through a carefully prepared environment, our
            authentic Montessori program supports parents in their efforts to
            help children value and love work. Through their work, children
            learn how to focus. Their learning is largely done through action,
            through hands-on interaction with physical objects. Through their
            work, children develop good routines, confidence, and a caring
            character. Our caring and engaging Montessori guides help children
            find work, develop good communication skills, and learn principles
            of peace and emotional intelligence. This age span covers children
            from pre-preschool, preschool, and kindergarten ages.
          </p>
        </div>
        <div>
          <img src={chilhoodImage} />
        </div>
      </div>

      <div className="age-period">
        <div>
          <h3>Elementary (6 to 12 years old)</h3>
        </div>
        <div>
          <p>
            This stage of development from ages 6 to 12 is referred to as a
            "love of learning phase." Normalized children in this stage are
            ready to dab into a variety of scientific, literacy, mathematical,
            historical, artistic and physical subjects with enthusiasm. Children
            are free to pursue their interests with the aid and support of our
            guides (teachers). In this stage of development, questions of moral
            character are important to children. We study examples from classic
            books, from peoples and histories of nations of the past, to learn
            solid principles for decision making in the present. Children
            imagine and explore the vastness of the ocean and of space, the
            intricacies and complex structures of life sciences. We teach
            children how to teach themselves through the the 4-Ring method of
            research, reason, relate, and record. As a general rule, children
            don’t have grades or an assigned “home-work.” But given the time and
            space, they love to continue learning and researching on the
            subjects of their interest at home.
          </p>
        </div>

        <div>
          <img src={elementaryAge} />
        </div>
      </div>
    </div>
  );
};

export default AgesPage;
