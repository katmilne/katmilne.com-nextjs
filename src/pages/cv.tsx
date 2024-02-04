import Navigation from '../components/Layout/Navigation';
import Footer from '../components/Layout/Footer';
import CVContent from '../components/Layout/CV';

const CV = () => {
  
    const markdownCV = `...`;

    return (
        <>
            <Navigation />
            <CVContent markdownContent={markdownCV} />
            <Footer />
        </>
        
    );

}
export default CV;