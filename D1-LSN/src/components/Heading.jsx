// react component are ALWAYS spelled with a capital letter
// and they can have a filename extension of .js or .jsx, .jsx is preferred

// every react component MUST output from its return statement a SINGLE element

const Heading = () => (
    <div>
        <h1>Welcome to React World!</h1>
        <h2>This will be an amazing trip!</h2>
    </div>
)

// export const name = 'Stefano'

// export const greetUser = (userName) => `Hello ${userName}`

export default Heading // the default export can be ONLY ONE