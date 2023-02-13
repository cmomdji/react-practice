import FormUserDetailsWithHooks from './FormUserDetailsWithHooks';
import FormPersonalDetailsWithHooks from './FormPersonalDetailsWithHooks';

function Counter() {
    switch (step) {
        case 1:
            return (
                <FormUserDetailsWithHooks />
            )
        case 2:
            return (
                <FormPersonalDetailsWithHooks />
            )
        case 3:
            return (
                <h1>Confirm</h1>
            )
        case 4:
            return (
                <h1>Success</h1>
            )
        default:
            return (
                <h1>Home</h1>
            )
    }
}

export default Counter;