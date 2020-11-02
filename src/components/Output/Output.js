import React, { useEffect } from "react";
import styles from "./Output.module.css";
import EmailSvg from "./EmailSvg";
import PhoneSvg from "./PhoneSvg";
import LocationSvg from "./LocationSvg";
import GlobeSvg from "./GlobeSvg";

export default function Output({ info, hide, setHide }) {
  const { basicInfo, summary, skills, experience, education } = info;
  const { name, email, phone, location, website } = basicInfo;
  const skillsArray = skills.match(/\w[^,]*/g);
  const save = () => setHide(true);
  const print = () => window.print();
  useEffect(() => {
    if (hide) print();
    return () => setHide(false);
  }, [hide, setHide]);

  if (!hide) {
    return (
      <div className={styles.container}>
        <div className={styles.preview}>
          <section className={styles.s1}>
            <div className={styles.s1Name}>{name}</div>
            <div className={styles.s1Position}>{summary.position}</div>
            <div className={styles.s1Summary}>{summary.summary}</div>
          </section>

          <section className={styles.s2}>
            <div className={styles.s2Items}>
              <EmailSvg />
              <div className={styles.s2Values}>{email}</div>
            </div>
            <div className={styles.s2Items}>
              <PhoneSvg />
              <div className={styles.s2Values}>{phone}</div>
            </div>
            <div className={styles.s2Items}>
              <LocationSvg />
              <div className={styles.s2Values}>{location}</div>
            </div>
            {website && website !== "" && (
              <div className={styles.s2Items}>
                <GlobeSvg />
                <div className={styles.s2Values}>{website}</div>
              </div>
            )}
          </section>

          <section className={styles.s3}>
            <div className={styles.s3Title}>Skills</div>
            <div className={styles.skills}>
              {skillsArray &&
                skillsArray.map((skill, index) => (
                  <div className={styles.skill} key={index}>
                    {skill}
                  </div>
                ))}
            </div>
          </section>

          <section className={styles.s4}>
            <div className={styles.s4Title}>Experience</div>
            {experience.map((exp, index) => (
              <div key={index} className={styles.expItem}>
                <div className={styles.expPosition}>{exp.position}</div>
                <div className={styles.expCompany}>{exp.company}</div>
                <div className={styles.expRow}>
                  {exp.fromDate && exp.untilDate && (
                    <div className={styles.expDate}>
                      {`${exp.fromDate} - ${exp.untilDate}`}
                    </div>
                  )}
                  {exp.fromDate && !exp.untilDate && (
                    <div className={styles.expDate}>{exp.fromDate}</div>
                  )}
                  {!exp.fromDate && exp.untilDate && (
                    <div className={styles.expDate}>{exp.untilDate}</div>
                  )}
                  <div className={styles.expDate}>{exp.location}</div>
                </div>
                <div className={styles.expTasks}>
                  {exp.task.map((task, index) => (
                    <div className={styles.task} key={index}>
                      <span className={styles.taskDash}>{"- "}</span>
                      {task}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <section className={styles.s5}>
            <div className={styles.s5Title}>Education</div>
            {education.map((ed, index) => (
              <div key={index} className={styles.edItem}>
                <div className={styles.eduCourse}>{ed.course}</div>
                <div className={styles.eduSchool}>{ed.school}</div>
                {ed.fromDate && ed.untilDate && (
                  <div className={styles.eduDate}>
                    {`${ed.fromDate} - ${ed.untilDate}`}
                  </div>
                )}
                {!ed.fromDate && ed.untilDate && (
                  <div className={styles.eduDate}>{ed.untilDate}</div>
                )}
                {ed.fromDate && !ed.untilDate && (
                  <div className={styles.eduDate}>{ed.fromDate}</div>
                )}
              </div>
            ))}
          </section>
        </div>
        <button className={styles.button} onClick={save}>
          Download
        </button>
      </div>
    );
  } else {
    return (
      <div className={styles.output}>
        <section className={styles.s1}>
          <div className={styles.s1Name}>{name}</div>
          <div className={styles.s1Position}>{summary.position}</div>
          <div className={styles.s1Summary}>{summary.summary}</div>
        </section>

        <section className={styles.s2}>
          <div className={styles.s2Items}>
            <EmailSvg />
            <div className={styles.s2Values}>{email}</div>
          </div>
          <div className={styles.s2Items}>
            <PhoneSvg />
            <div className={styles.s2Values}>{phone}</div>
          </div>
          <div className={styles.s2Items}>
            <LocationSvg />
            <div className={styles.s2Values}>{location}</div>
          </div>
          {website && website !== "" && (
            <div className={styles.s2Items}>
              <GlobeSvg />
              <div className={styles.s2Values}>{website}</div>
            </div>
          )}
        </section>

        <section className={styles.s3}>
          <div className={styles.s3Title}>Skills</div>
          <div className={styles.skills}>
            {skillsArray &&
              skillsArray.map((skill, index) => (
                <div className={styles.skill} key={index}>
                  {skill}
                </div>
              ))}
          </div>
        </section>

        <section className={styles.s4}>
          <div className={styles.s4Title}>Experience</div>
          {experience.map((exp, index) => (
            <div key={index} className={styles.expItem}>
              <div className={styles.expPosition}>{exp.position}</div>
              <div className={styles.expCompany}>{exp.company}</div>
              <div className={styles.expRow}>
                {exp.fromDate && exp.untilDate && (
                  <div className={styles.expDate}>
                    {`${exp.fromDate} - ${exp.untilDate}`}
                  </div>
                )}
                {exp.fromDate && !exp.untilDate && (
                  <div className={styles.expDate}>{exp.fromDate}</div>
                )}
                {!exp.fromDate && exp.untilDate && (
                  <div className={styles.expDate}>{exp.untilDate}</div>
                )}
                <div className={styles.expDate}>{exp.location}</div>
              </div>
              <div className={styles.expTasks}>
                {exp.task.map((task, index) => (
                  <div className={styles.task} key={index}>
                    <span className={styles.taskDash}>{"- "}</span>
                    {task}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className={styles.s5}>
          <div className={styles.s5Title}>Education</div>
          {education.map((ed, index) => (
            <div key={index} className={styles.edItem}>
              <div className={styles.eduCourse}>{ed.course}</div>
              <div className={styles.eduSchool}>{ed.school}</div>
              {ed.fromDate && ed.untilDate && (
                <div className={styles.eduDate}>
                  {`${ed.fromDate} - ${ed.untilDate}`}
                </div>
              )}
              {!ed.fromDate && ed.untilDate && (
                <div className={styles.eduDate}>{ed.untilDate}</div>
              )}
              {ed.fromDate && !ed.untilDate && (
                <div className={styles.eduDate}>{ed.fromDate}</div>
              )}
            </div>
          ))}
        </section>
      </div>
    );
  }
}
