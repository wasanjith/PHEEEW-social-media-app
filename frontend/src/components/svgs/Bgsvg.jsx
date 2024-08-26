import bg from '../../assets/bg.svg';

const bgsvg = (props) => {
    return (
        <div>
            <img src={bg} alt="bg image" {...props} />
        </div>
    );
};

export default bgsvg;