import React from "react";
import styles from "./Courses.module.css";
import Course from "./Courses/Course";

const el = (
  <>
    <div className={styles.circle}></div>
    <div className={styles.circle_in}></div>
  </>
);
const data = [
  { back: "triangle", index: 1, text: "Presentations", children: null },
  { back: "circle_container", index: 2, text: "Interviews", children: el },
  { back: "radius", index: 3, text: "Socializing", children: null },
  { back: "trapezoid", index: 4, text: "Negotiations", children: null }
];

class Courses extends React.Component {
  constructor(props) {
    super(props);
    for (let i = 0; i < 9; i++) {
      this["ref_" + i] = React.createRef();
    }
    window.onscroll = this.handleOnScroll;
  }

  handleOnScroll = () => {
    const scrollY = window.scrollY + window.innerHeight - 100;
    const ref_0 = this.ref_0.current;
    const fil = styles.fadeInLeft;

    if (!ref_0.classList.contains(styles.fadIn) && ref_0.offsetTop < scrollY) {
      ref_0.classList.add(styles.fadIn);
    }

    for (let i = 1; i < 5; i++) {
      const ref = this["ref_" + i].current;
      const ref_1 = this["ref_" + (i + 4)].current;

      if (!ref.classList.contains(fil) && ref.offsetTop < scrollY) {
        ref.classList.add(fil);
        setTimeout(() => ref_1.classList.add(fil), 700);
      }
    }
    this.ref_8.current.classList.contains(fil) && (window.onscroll = null);
  };

  componentWillUnmount() {
    window.onscroll = null;
  }

  render() {
    return (
      <div className={styles.main}>
        <div className={styles.first_line}>
          <div className={styles.line} />
        </div>
        <div className={styles.second_line}>
          <p
            ref={this.ref_0}
            className={styles.fad}
            data-text="Courses Available. "
          >
            I'm a paragraph. Click here to add your own text and edit me. I’m a
            great place for you to tell a story and let your users know a little
            more about you.
          </p>
        </div>

        <div className={styles.third_line}>
          {data.map(el => (
            <Course
            key={el.index}
              row={styles.row}
              fade={styles.fade}
              back={styles[el.back]}
              textRef={this[`ref_${el.index}`]}
              linkRef={this[`ref_${el.index + 4}`]}
              text={el.text}
              n={el.index}
            >
              {el.children}
            </Course>
          ))}
        </div>
      </div>
    );
  }
}

export default Courses;