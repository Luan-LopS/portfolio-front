import Title from "../../components/Title"
import Paragraph from '../../components/Paragraph'
import { GitCode } from "./style"

const About = () =>(
  <section>
    <Title fontSize={16}>About</Title>
    <Paragraph>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
      rerum a non quaerat repellendus, ipsum veniam dolore, fuga officiis
      porro sunt dolorum? Quod quasi, consectetur magnam modi blanditiis
      fugit nobis corporis cum! Nemo fugit voluptate deserunt aut, voluptatum
      quod! Corporis aperiam iure consequuntur sed error neque eligendi
      placeat incidunt eveniet!
    </Paragraph>
    <GitCode>
      <img src="https://camo.githubusercontent.com/f3fd3dc022f060fead786bec525e8abd49201c3a1ab13e4bb1ef76523e7275a0/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d4c75616e2d4c6f70532673686f775f69636f6e733d74727565267468656d653d746f6b796f6e6967687426696e636c7564655f616c6c5f636f6d6d6974733d7472756526636f756e745f707269766174653d74727565" data-canonical-src="https://github-readme-stats.vercel.app/api?username=Luan-LopS&amp;show_icons=true&amp;theme=tokyonight&amp;include_all_commits=true&amp;count_private=true"></img>
      <img src="https://camo.githubusercontent.com/6d1611b8adf7edeeded5f2e69fefc7ab7fbcdb0d0168193a6ff1efaf6014d4ea/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d4c75616e2d4c6f7053266c61796f75743d636f6d70616374266c616e67735f636f756e743d3136267468656d653d746f6b796f6e69676874" data-canonical-src="https://github-readme-stats.vercel.app/api/top-langs/?username=Luan-LopS&amp;layout=compact&amp;langs_count=16&amp;theme=tokyonight"></img>
    </GitCode>

  </section>
)

export default About
