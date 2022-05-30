# The whole step by step
New Global Navigation (which is CPT-1676) is a replacement of Old Global Navigation (avoid known bugs & clear structure).

Is New Global Navigation (which is CPT-1676) finished? No.
## Tasks to finish
Things left:
1. Views
   1. Parent
   2. Children

2. Validations
   1. Form
   2. Dialog Angular Material

3. Server Data: Replace dummy data with real data coming from the Server

4. CRUD Actions
    1. CRUD Server Data
    2. Front-End elements CRUD

## 1. Views
* Parent items
   1. [x] Parent Element
   2. [ ] Create Parent Item Dialog
   3. [ ] Parent Edit Dialog 
   4. [ ] Parent Remove Dialog 
   5. [x] Parent Open: Parent Body
* Children items
   1. [ ] Children Element --> Image icon
   2. [ ] Create Children Item Dialog
   3. [ ] Children Edit Dialog 
   4. [ ] Children Remove Dialog 

## 2. Validation

1. Form Validations
   1. Parent
      1. Type of Item
         1. Link (mute Content Type)
         2. Vertical Dropdown (enables Content Type with options that comes from Server Data) example is:
            1. Non Specific
            2. Campaign
               1. The "Add items to the dropdown" --- validation is ---> Can't be Empty (At least one retailer must be chosen)
            3. Cupon Category
            4. Retailers
            5. Article
      2. Content Type (defined by Server Data from each partner)
      3. [x] Title 
      4. [x] URL
      5. The "Add items to the dropdown" takes Retailes from Server Data
      6. Show "See all" button & With images : Should be visible for All the Content Types
   
   2. Child ** ---> Needs a View buit from Labels and Inputs HTML elements & Validation

3. Validation in Dialog Angular Material.

4. Form for Child Validation : Child ---> Needs a View buit from Labels and Inputs HTML elements


## 3. Communication with server 
   1. Server Data: replace dummy data with real data
   2. CRUD actions

#### 3.1 Server Data
* Location: Form Validations 
   1. Parent 
      1. Type of Item > Vertical Dropdown enables Content Type defined by Server Data from each partner
      2. The "Add items to the dropdown" takes Retailes from Server Data
* Location: 
    1. Image boolean/string to display text message if image exist or doesn't exist

## 4. CRUD Actions
1. Front-End
  * Parent
     1. [x] Create Parent
     2. [ ] Delete Parent
     3. [x] Edit Parent
  * Children 
     1. [x] Create Child
     2. [ ] Delete Child
     3. [x] Edit Child

2. Server Data
  * Parent
    1. [ ] Create Parent
    2. [ ] Delete Parent
    3. [ ] Edit Parent
  * Children 
    2. [ ] Create Child
    3. [ ] Delete Child
    4. [ ] Edit Child

3. Order Functionality : The user applies custom order for avigation Elements
   1. CRUD for set the Parent Order that is based in an ID
   2. CRUD for set the Children Order that is based in an ID




# Make a Plan
1. [x] We need to reproduce the installation method that the current Global Navigation uses to be installed into Admin Panel (Is GlobalNav a Module/Dependency?) ----------> **_as a regular Angular Component_**
2. [x] Leave the Global Navigation StandAlone environment ----------> **_It's a regular Angular Component, there is no need of special environment_**
3. Replace Dummy Data with Real Server Data
4. Make Views
   1. Main View
   2. Parent & Children
      1. Dialogs Views
      2. Atomic Elements Views
5. Validation as Library of requirements
6. CRUDs
   1. Server Data API
   2. Asynchronous Calls from Front-End
      1. Load inital Data
      2. Handle Front-End Elements based in responses







# Where we are now?
1. Waiting for Andy 
   * Andy said he will talk with a Senior Angular Dev to help us.
2. We have a splitted Project, we need to (from "Make Plan" tasks 1, 2, 3)
   1. Unify our Project
   2. Install it in Admin Panel
   3. Get Data from Admin Panel inside our Project
3. We need to complete Views, Front-End and Server Data functionalities 




# Spike
1. [Creating Node.js modules](https://docs.npmjs.com/creating-node-js-modules)


# Vocabulary
1. Dialog: Angular Material Component like a Popup or Modal and it also can pass values and data