
import Card from '@/components/Home/Card';

const HomePage = () => {
  //modalBody[0] - modal introduction
  //modalBody[1] - modal objectives
  //modalBody[2] - modal conclusion
  const cardsData = [
    {
      imageSrc: "/assets/nkwawie_shs.jpg",
      title: "EKO SKILLS GHANA TRAINING WORKSHOP REPORT",
      location: "NKAWIE SENIOR HIGH SCHOOL, ASHANTI REGION",
      date: "28th July, 2023",
      modalTitle:
        "EKO SKILLS GHANA TRAINING WORKSHOP REPORT: AT NKAWIE SENIOR HIGH SCHOOL.",
      modalBody: [
        "The purpose of the skills training is geared towards empowering young individuals especially students in the Ashanti Region to acquire the relevant soft skills that will help them to create jobs on their own. This is an approach adopted to help eradicate the negative effect of streetism in Kumasi. This is mainly due to financial constraints and the inability of students to use their skills profitably.",

        "The objectives of this training were as follows: To increase the understanding of the need to acquire the needed skills during this hard times. To enhance the understanding of participants through skill training sessions and discussions on skills training on liquid soap making, t-shirt printing and liquid soap making.",

        "In conclusion, the training effectively emphasized the importance of acquiring practical skills during difficult times. Through focused sessions on liquid soap making and T-shirt printing, participants gained valuable knowledge that can help them navigate and thrive in challenging circumstances.",
      ],
      modalPdfUrl: "",
    },
    {
      imageSrc: "/assets/ayeduase.png",
      title: "EKO SKILLS GHANA TRAINING WORKSHOP REPORT",
      location:
        "PRESBYTERIAN CHURCH OF GHANA, PRINCE OF PEACE CONGREGATION-AYEDUASE",
      date: "1ST APRIL, 2023",
      modalTitle:
        "EKO SKILLS GHANA TRAINING WORKSHOP REPORT: PRESBYTERIAN CHURCH OF GHANA, PRINCE OF PEACE CONGREGATION-AYEDUASE",
      modalBody: [
        "This Skills Training Program was launched to foster a culture of entrepreneurship, driving socio-economic innovation and growth.he program overview includes objectives, target audience, facilitators, venue, and key activities. The initiative aims to equip students and community members with essential entrepreneurial skills.",

        "The Skills Training Program aims to equip participants with entrepreneurial skills, foster creativity and problem-solving, and support the development of business ideas. It also promotes self-employment, offers mentorship, and encourages voluntarism among youth to contribute to their communities.",

        "In conclusion, the Skills Training Program is a comprehensive initiative designed to empower participants with essential entrepreneurial skills, creativity, and problem-solving abilities. By fostering self-employment and providing mentorship, the program not only aids in business development but also encourages youth to contribute positively to their communities through voluntarism.",
      ],
      modalPdfUrl: "",
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-wrap justify-center">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
