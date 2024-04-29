import { buttonStyles } from "../../../utils/actionButtonStyles";

const ActionButton = ({ buttonType, IconComponent }) => {
    const appliedStyles = buttonStyles[buttonType];

    return <button style={appliedStyles}>{IconComponent}</button>;
};

export default ActionButton;
