import Image from 'next/image';
import img1 from '../public/img1.jpg';
import img6 from '../public/img6.jpg';


const About = () => {
  const members = [
    {
      name: 'Seki Asuka', 
      title: '代表', 
      role: 'フロントエンドエンジニア / フォトグラファー', 
      text: '人物を中心に写真や動画制作を行う。',
      imgUrl: img1,
    },
    {
      name: 'Junya Nomura', 
      title: 'CTO', 
      role: 'Web・ブロックチェーンエンジニア / フォトグラファー', 
      text: '一橋大学大学院中退。シンガポール南洋理工大学MBA修了。',
      imgUrl: img6    
    }
  ];
  return (
    <section class="mb-32">
      <h2 className="text-2xl font-bold mt-8 mb-4">Who We Are</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {members.map((member) => (
          <div className="flex flex-col max-w-md p-6 dark:bg-gray-900 dark:text-gray-100" key={member.name}>
            {/* <img src="./images/img1.jpg" alt="" className="flex-shrink-0 object-cover h-64 rounded-r-full sm:h-96 dark:bg-gray-500 aspect-square" /> */}
            <Image 
              src={member.imgUrl}
              alt="image"
              className="flex-shrink-0 object-cover h-64 rounded-tr-[32px] sm:h-96 dark:bg-gray-500 aspect-square"
              width={384}
              height={384}
            />
            <div>
              <h2 className="mt-4 text-xl font-semibold">{member.name}</h2>
              <span className="block pb-2 text-sm dark:text-gray-400">{member.title}</span>
              <span className="block pb-2 text-sm dark:text-gray-400">{member.role}</span>
              <p>{member.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About
