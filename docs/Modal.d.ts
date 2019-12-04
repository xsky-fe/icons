import * as React from 'react';
interface Props {
    open: boolean;
    closeModal: () => void;
    icon: string;
}
declare const Modal: React.SFC<Props>;
export default Modal;
