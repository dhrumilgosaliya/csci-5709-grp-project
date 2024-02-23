# Assignment 1

* *Date Created*: 06 FEB 2024
* *Last Modification Date*: 06 FEB 2024
* *Assignment URL*: <https://fintasticapp.netlify.app/>
* *Page1 URL*: <https://fintasticapp.netlify.app/whatsnew>
* *Page2 URL*: <https://fintasticapp.netlify.app/subscription-plans>
* *Page3 URL*: <https://fintasticapp.netlify.app/checkout>
* *Git URL*: <https://git.cs.dal.ca/shreyak/csci-5709-assignments/-/tree/main/Assignment1?ref_type=heads>

## Authors

* [Shreya Kapoor](sh820878@dal.ca)

## Deployment

I made a clone of the front-end project on github and then imported it on netlify. Then, I configured the build and deployment settings to deploy the app. After all the testcases are passed, my application was deployed on the link mentioned.
https://fintasticapp.netlify.app/ 
Steps to navigate to the pages
1. Click on pro version from the navbar (page 1)
2. Select subscribe now (page 2)
3. After clicking subscribe now redirected to payment page (page 3)

## Built With

* [React](https://legacy.reactjs.org/docs/getting-started.html/) - The web framework used
* [npm](https://docs.npmjs.com//) - Dependency Management

## Sources Used

I have mostly referred to the following official documentation to learn and build my UI.

1. https://mui.com/material-ui
2. https://legacy.reactjs.org/docs/getting-started.html 

I used some of the icons from the below site to make my UI look interactive

1. https://mui.com/material-ui/material-icons/ 

As I had multiple pages, to link them I referred about how to use the useNavigate to add the routing between the pages from the below site

1. https://reactrouter.com/en/main/hooks/use-navigation
2. https://www.geeksforgeeks.org/reactjs-usenavigate-hook/

### paymentform.js

*Lines 98 - 169*

```
<TextField
          label="Email"
          fullWidth
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Card Number"
          fullWidth
          className="input-field"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <TextField
              label="MM/YY"
              fullWidth
              className="input-field"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="CVC"
              fullWidth
              className="input-field"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
            />
          </Grid>
        </Grid>
        <TextField
          label="Cardholder Name"
          fullWidth
          className="input-field"
          value={cardholderName}
          onChange={(e) => setCardholderName(e.target.value)}
        />
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <FormControl fullWidth className="input-field">
              <InputLabel>Country</InputLabel>
              <Select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <MenuItem value="US">United States</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="ZIP"
              fullWidth
              className="input-field"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          className="pay-now-button"
          onClick={handleSubmit}
        >
          Pay Now
        </Button>
```

I have developed the above code by taking the reference of the code in the following:

https://mui.com/material-ui/react-text-field/ 

```
<Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField id="outlined-search" label="Search field" type="search" />
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        />
      </div>
      <div>
        <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          disabled
          id="filled-disabled"
          label="Disabled"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
        <TextField
          id="filled-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
        />
        <TextField
          id="filled-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="filled"
        />
      </div>
      <div>
        <TextField
          required
          id="standard-required"
          label="Required"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          disabled
          id="standard-disabled"
          label="Disabled"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
        <TextField
          id="standard-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
          variant="standard"
        />
        <TextField
          id="standard-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          variant="standard"
        />
        <TextField
          id="standard-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="standard"
        />
      </div>

```

- I studied the code implemented in [Material UI - React Text Field](https://mui.com/material-ui/react-text-field/) and then modified it according to the requirements of my assignment.
- I referred to this website because it has all the concepts along with the example code clearly defined which helped me get an idea of how to implement it. After understanding it, I could make the changes in the code and modified it as per my requirements. My moto was to refer and learn the concepts which could help me build a solid foundation in how to use the materialui elements.

### Navbar.js

*Lines 7 - 25*

```
<nav className="navbar"> 
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/expenses">Expense Management</Link>
        </li>
        <li>
          <Link to="/calendar">Calendar</Link>
        </li>
        <li>
          <Link to="/whatsnew">Pro Version</Link>
        </li>
        <li className="hello-user">
        <Link to="/">Hello, Petra</Link>
        </li>
      </ul>
    </nav>

```
I have developed the above code by referring and making necessary changes in [codevertiser - reactjs-responsive-navbar](https://www.codevertiser.com/reactjs-responsive-navbar/) as shown below: 

```
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Brand />
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}


```

- I implemented the code by studying [codevertiser - reactjs-responsive-navbar](https://www.codevertiser.com/reactjs-responsive-navbar/) the original code which helped me in understanding its implementation. Then, I modified the code as per the requirements of my assignment.
- I referred to [codevertiser - reactjs-responsive-navbar](https://www.codevertiser.com/reactjs-responsive-navbar/) because it had a simple implementation of how to design a navbar along with its explanation which helped me get an idea of how to implement it. After understanding it, I could make the changes in the code and modified it as per my requirements. My moto was to refer and learn the concepts which could help me build a solid foundation of the concept.


## Acknowledgments

* I would like to express my gratitude to the creators and contributors of the code snippets used in this project. Their work has provided valuable insights and served as a foundation for understanding and learning its functionality and logic.