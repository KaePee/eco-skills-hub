
import Card from '@/components/Home/Card';

const HomePage = () => {
  const cardsData = [
    {
      imageSrc: '/assets/nkwawie_shs.jpg',
      title: "EKO SKILLS GHANA TRAINING WORKSHOP REPORT.",
      location: 'NKAWIE SENIOR HIGH SCHOOL, ASHANTI REGION',
      date: '28th July, 2023',
    },
    {
      imageSrc: '/assets/ayeduase.png',
      title: 'EKO SKILLS GHANA TRAINING WORKSHOP REPORT',
      location: 'PRESBYTERIAN CHURCH OF GHANA, PRINCE OF PEACE CONGREGATION-AYEDUASE',
      date: '1ST APRIL, 2023',
    }
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
