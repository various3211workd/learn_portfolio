import Layout from '../components/layout';
import Skils from '../components/skils';
import Myprojects from '../components/introfuction';
import Intro from '../components/intro';
import MyNameIs from '../components/mynameis';
import Slide from '@/components/slide';

export default function Home() {
  return (
    <Layout>
      <Intro />

      <MyNameIs />

      <Myprojects />
      <Skils />
      <Slide />
    </Layout>
  );
}
