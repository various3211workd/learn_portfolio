import Skils from '../components/skils';
import Myprojects from '../components/introfuction';
import Intro from '../components/intro';
import MyNameIs from '../components/mynameis';
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
