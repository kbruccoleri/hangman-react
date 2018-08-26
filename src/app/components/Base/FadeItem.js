import posed from 'react-pose';

const FadeItem = posed.div({
    enter: { opacity: 1 },
    exit: { opacity: 0 }
});

export default FadeItem;