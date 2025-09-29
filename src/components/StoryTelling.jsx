import React from 'react';
import TimelineItem from './TimelineItem';
import styles from './componentStyles/StoryTelling.module.css';

function StoryTelling() {
  const timelineData = [
    {
      id: 1,
      year: "2018",
      title: "จุดเริ่มต้น",
      description: "ก่อตั้งบริษัทด้วยความมุ่งมั่นที่จะนำเสนอขนมไทยแท้ๆ ให้กับคนรุ่นใหม่",
      isRight: true
    },
    {
      id: 2,
      year: "2019",
      title: "การพัฒนาผลิตภัณฑ์",
      description: "เริ่มพัฒนาสูตรสาโกต้นฉบับที่ผสมผสานความดั้งเดิมกับความทันสมัย",
      isRight: false
    },
    {
      id: 3,
      year: "2020",
      title: "การขยายตลาด",
      description: "เปิดตัวผลิตภัณฑ์ครั้งแรกและได้รับการตอบรับที่ดีจากลูกค้า",
      isRight: true
    },
    {
      id: 4,
      year: "2021",
      title: "นวัตกรรมใหม่",
      description: "พัฒนารสชาติใหม่และบรรจุภัณฑ์ที่เป็นมิตรต่อสิ่งแวดล้อม",
      isRight: false
    },
    {
      id: 5,
      year: "2025",
      title: "ปัจจุบัน",
      description: "มุ่งสู่การเป็นแบรนด์ขนมไทยชั้นนำที่รักษาเอกลักษณ์และความยั่งยืน",
      isRight: true
    }
  ];

  return (
    <div className={styles.storytellingContainer}>
      <h1 className={styles.title}>การเดินทางของเรา</h1>
      <div className={styles.timeline}>
        <div className={styles.timelineLine}></div>
        {timelineData.map((item) => (
          <TimelineItem
            key={item.id}
            data={item}
          />
        ))}
      </div>
    </div>
  );
}

export default StoryTelling;