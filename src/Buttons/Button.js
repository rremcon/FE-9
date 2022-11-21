import React from 'react';

function Button({click, visible}) {
    return (
        <Button>
            type="button"
            clicking={click}
            visibility={visible}

        </Button>
    );
}

export default Button;