import PropTypes from "prop-types";
import { Badge } from "./SelectBadge.styled";
import { useEffect, useState } from "react";

SelectBadge.propTypes = {
    quantity: PropTypes.number,
    step: PropTypes.number,
    changeSlide: PropTypes.any
};

function SelectBadge(props) {
    const [selected, setSelected] = useState(props.step);

    useEffect(() => setSelected(props.step), [props.step]);

    const populate = () => {
        const arr = new Array();
        for (let item = 0; item < props.quantity; item++) arr.push(item);
        return arr.map(element => <Badge key={element} onClick={() => changeSlide(element)} selected={selected == element}  />);
    }

    const changeSlide = element => {
        setSelected(element);
        if (props.changeSlide) props.changeSlide(element)
    }

    return (
        <>
            {populate()}
        </>
    );
}

export default SelectBadge;