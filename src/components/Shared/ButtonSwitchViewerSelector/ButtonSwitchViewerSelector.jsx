import { useState } from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

function ButtonSwitchViewerSelector({ ItsChecked }) {

    const [checked, setChecked] = useState(false);

    const handleChange = (e) => {
        const isChecked = e.currentTarget.checked;
        setChecked(isChecked);
        ItsChecked(checked);
    };

    return (
        <>
            <ButtonGroup className="mb-2">
                <ToggleButton
                    id="toggle-check"
                    type="checkbox"
                    variant="secondary"
                    checked={checked}
                    value="1"
                    onChange={handleChange}
                >
                    Change Viewer
                </ToggleButton>
            </ButtonGroup>
            <br />
        </>
    );
}

export default ButtonSwitchViewerSelector;