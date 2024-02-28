# Fintastic

* *Date Created*: 29 Jan 2024
* *Last Modification Date*: 27 Feb 2024
* *Deployed website URL*: <https://main--fintastic-grp-14.netlify.app/home>
* *Git URL*: <https://git.cs.dal.ca/gosaliya/CSCI-5709-Grp-14>

* *Group 14 main branch Git URL*: <https://git.cs.dal.ca/gosaliya/CSCI-5709-Grp-14.git>

## Group members GIT URLs
* *Group 14 Bhargav branch Git URL*: <https://git.cs.dal.ca/gosaliya/CSCI-5709-Grp-14/-/tree/Bhargav-Kanodiya?ref_type=heads>
* *Group 14 Dhrumil branch Git URL*: <https://git.cs.dal.ca/gosaliya/CSCI-5709-Grp-14/-/tree/dhrumil-gosaliya?ref_type=heads>
* *Group 14 Raman branch Git URL*: <https://git.cs.dal.ca/gosaliya/CSCI-5709-Grp-14/-/tree/feature-ramandeepkaur?ref_type=heads>
* *Group 14 Vishnu branch Git URL*: <https://git.cs.dal.ca/gosaliya/CSCI-5709-Grp-14/-/tree/vishnu?ref_type=heads>
* *Group 14 Shreya branch Git URL*: <https://git.cs.dal.ca/gosaliya/CSCI-5709-Grp-14/-/tree/shreya-kapoor?ref_type=heads>
* *Group 14 Jaskaran Singh branch Git URL*: <https://git.cs.dal.ca/gosaliya/CSCI-5709-Grp-14/-/tree/jaskaran-singh?ref_type=heads>


## Author
* [Bhargav Kanodiya](bh950065@dal.ca) - *(Developer)*
* [Dhrumil Gosaliya](dh411197@dal.ca) - *(Developer)*
* [Ramandeep Kaur](rm661081@dal.ca) - *(Developer)*
* [Vishnu Narayanbhai Vasita](vs369825@dal.ca) - *(Developer)*
* [Shreya Kapoor](sh820878@dal.ca) - *(Developer)*
* [Jaskaran Singh](js356337@dal.ca) - *(Developer)*

## Deployment

We created a mirror repository on github from gitlab and deployed on netlify. Configued the built settings of Netlify as required and the website is live on above URL.

## Built With

* [React](https://legacy.reactjs.org/docs/getting-started.html/) - The web framework used
* [npm](https://docs.npmjs.com//) - Dependency Management
* [material ui](https://mui.com/material-ui/)

## Sources Used

### budget-planner.js

*Lines 130 - 137*

```
    {/* Pie chart */}
        <PieChart
          series={[{ data: chartData }]}
          width={500}
          height={230}
          labelAccessor={({ dataEntry }) => `${dataEntry.value}%`}
        />
```

The code above was created by adapting the code in [Charts - Pie](https://mui.com/x/react-charts/pie/#basics) as shown below: 

```
import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'series A' },
            { id: 1, value: 15, label: 'series B' },
            { id: 2, value: 20, label: 'series C' },
          ],
        },
      ]}
      width={400}
      height={200}
    />
  );
}

```

*Lines 140 - 167*

```
    <Stack spacing={2}>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          {chartData.map((category, index) => (
            <Card
              key={category.id}
              style={{
                marginRight: "30px",
                marginBottom: "10px",
                width: "23%",
              }}
            >
              <CardContent>
                <Typography variant="h5">{category.label}</Typography>
                <Typography>
                  Budget: {category.value}% equals to $
                  {(category.value / 100) * monthlySalary}
                </Typography>
                <IconButton onClick={() => handleEdit(index)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(index)}>
                  <DeleteIcon />
                </IconButton>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Stack>
```

The code above was created by adapting the code in [Cards - Media](https://mui.com/material-ui/react-card/#basics) as shown below: 

```
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

```



### navbar.js

*Lines 26 - 121*

```
    export default function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h5" sx={{ my: 2 }}>
        FINtastic
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={item.path}
                >
                  {item.title}
                </Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" style={{ background: "#4c4b42" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            FINtastic
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item.title}>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={item.path}
                >
                  {item.title}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main">
        <Toolbar />
      </Box>
    </Box>
  );
}



```

The code above was created by material UI App bar (https://mui.com/material-ui/react-app-bar/)

### AddExpense.js

*Lines 35-115*

```
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
      <Form
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 12,
        }}
        layout="horizontal"
        style={{
          width: '40%',
          padding: '40px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          backgroundColor: '#f9f9f9',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <Title style={{ color: '#1890ff' }}>Add Expense</Title>
        </div>
        <Form.Item label="Enter Amount">
          <InputNumber style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item label="Expense Type">
          <Radio.Group>
            <Radio value="paid"> Paid </Radio>
            <Radio value="received"> Received </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="Payment Medium">
          <Select style={{ width: '100%' }}>
            <Select.Option value="Credit">Credit Card</Select.Option>
            <Select.Option value="Debit">Debit Card/Bank AC</Select.Option>
            <Select.Option value="Cash">Cash</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Date">
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item label="Description">
          <TextArea rows={4} style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload action="/upload.do" listType="picture-card">
            <button
              style={{
                border: 0,
                background: 'none',
              }}
              type="button"
            >
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </button>
          </Upload>
        </Form.Item>
        <Form.Item label="Category">
          <Select style={{ width: '100%' }}>
            <Select.Option value="entertainment">Entertainment</Select.Option>
            <Select.Option value="food">Food</Select.Option>
            <Select.Option value="rent">Rent</Select.Option>
            <Select.Option value="car">Car</Select.Option>
            <Select.Option value="insurance">Insurance</Select.Option>
            <Select.Option value="grocery">Grocery</Select.Option>
            <Select.Option value="travel">Travel</Select.Option>
            <Select.Option value="technology">Technology</Select.Option>
            <Select.Option value="other">Other</Select.Option>
          </Select>
        </Form.Item>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Button type="primary" onClick={successNotification}>Submit</Button>
        </div>
      </Form>
    </div>
```
This code was adapted from the [Ant Design 5.0 Help designers developers building beautiful products more flexible and working with happiness](https://ant.design/components/overview/) as shown below:

```
import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
} from 'antd';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const FormDisabledDemo = () => {
  const [componentDisabled, setComponentDisabled] = useState(true);
  return (
    <>
      <Checkbox
        checked={componentDisabled}
        onChange={(e) => setComponentDisabled(e.target.checked)}
      >
        Form disabled
      </Checkbox>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        disabled={componentDisabled}
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item label="Checkbox" name="disabled" valuePropName="checked">
          <Checkbox>Checkbox</Checkbox>
        </Form.Item>
        <Form.Item label="Radio">
          <Radio.Group>
            <Radio value="apple"> Apple </Radio>
            <Radio value="pear"> Pear </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Input">
          <Input />
        </Form.Item>
        <Form.Item label="Select">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="TreeSelect">
          <TreeSelect
            treeData={[
              {
                title: 'Light',
                value: 'light',
                children: [
                  {
                    title: 'Bamboo',
                    value: 'bamboo',
                  },
                ],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="Cascader">
          <Cascader
            options={[
              {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [
                  {
                    value: 'hangzhou',
                    label: 'Hangzhou',
                  },
                ],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>
        <Form.Item label="RangePicker">
          <RangePicker />
        </Form.Item>
        <Form.Item label="InputNumber">
          <InputNumber />
        </Form.Item>
        <Form.Item label="TextArea">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Switch" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload action="/upload.do" listType="picture-card">
            <button
              style={{
                border: 0,
                background: 'none',
              }}
              type="button"
            >
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </button>
          </Upload>
        </Form.Item>
        <Form.Item label="Button">
          <Button>Button</Button>
        </Form.Item>
        <Form.Item label="Slider">
          <Slider />
        </Form.Item>
        <Form.Item label="ColorPicker">
          <ColorPicker />
        </Form.Item>
      </Form>
    </>
  );
};
export default () => <FormDisabledDemo />;
```

- The Code on the source [Antd Form Components](https://ant.design/components/form) was implemented extensively for various inputs to take from user in userfriendly way.
- I used [Antd Form Components](https://ant.design/components/form)'s Code because it has really great clean looking UI template with many input options and It is really easy to Implement.
- I have modified [Antd Form Components](https://ant.design/components/form)'s code in such a way that I can make all the personalized options as per our project's requirment and changed it accordingly and only took the part of the code which is necessary for our project.

### AddExpense.js

*Lines 25-31*

```
const successNotification=()=>{
    Swal.fire({
        title: "Expense Added",
        text: "Expense has been added successfully!",
        icon: "success"
      });
}
```
The Code above was adapted from [Sweetalert2](https://sweetalert2.github.io/#declarative-templates) to make attractive alert messages to the User as below.

```
Swal.fire({
  title: "Good job!",
  text: "You clicked the button!",
  icon: "success"
});
```
- The Code in [Sweetalert2](https://sweetalert2.github.io/#declarative-templates) are implemented to make alerts more efficient and user friendly.
- I used [Sweetalert2](https://sweetalert2.github.io/#declarative-templates) because it has easy installation and implementation.
- I modified [Sweetalert2](https://sweetalert2.github.io/#declarative-templates)'s code by replacing simple messages to my requirements.

### LandingPage.js

- Image used (https://unsplash.com/photos/turned-on-black-and-grey-laptop-computer-mcSDtbWXUZU)
- Image used (https://unsplash.com/photos/person-holding-pencil-near-laptop-computer-5fNmWej4tAA)

### Faq.js

- Image used (https://nomadevents.com/faq/faq-banner/)
- Image used (https://www.upuntilnow.ca/pages/contact-us)

## Acknowledgments

* We deeply appreciate the invaluable insights and dedication demonstrated through the provided code, which laid a solid foundation for comprehending its functionality and logic. Their commitment to their work is commendable.
* Their contribution offered profound insights and significantly impacted my learning journey, shaping my approach to understanding various techniques and approaches. I am genuinely grateful for their efforts and expertise.
* The code Helped me to implement my tasks easily and make my UI really clean and great looking.
* The Code has taught me how to design my application with approach of simplicity and effectiveness. Their contribution is highly apperciated.
