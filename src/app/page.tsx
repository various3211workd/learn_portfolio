import Skils from '../components/skils';
import Myprojects from '../components/myproject';
import Intro from '../components/intro';
import MyNameIs from '../components/selfIntro';
import Slide from '@/components/slide';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Home() {
  return (
    <>
      <Header />

      <Intro />
      <MyNameIs />
      <Myprojects />
      <Skils />
      <Slide />

      <Footer />
    </>
  );
}
