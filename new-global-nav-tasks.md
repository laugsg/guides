# The whole step by step
New Global Navigation (which is CPT-1676) is a replacement of Old Global Navigation (avoid known bugs & clear structure).

Is New Global Navigation (which is CPT-1676) finished? No.

## Tasks to finish
Things left:
1. Views:
   1. Children items

2. Validations
   1. Form
   2. Dialog Angular Material

3. Server Data: Replace dummy data with real data coming from the Server

4. CRUD Actions
    1. CRUD Server Data
    2. Front-End elements CRUD

## 1. Child **
Child ---> Needs a View buit from Labels and Inputs HTML elements & Validation


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
      3. [ x ] Title 
      4. [ x ] URL
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
1. We need to reproduce the installation method that the current Global Navigation uses to be installed into Admin Panel (Is GlobalNav a Module/Dependency?)
2. Replace Dummy Data with Real Server Data
3. Make Views
   1. Main View
   2. Children Views as 
      1. Dialogs, 
      2. Atomic Elements Views
4. Validation as Library of requirements
5. CRUDs
   1. Server Data API
   2. Asynchronous Calls from Front-End
      1. Load inital Data
      2. Handle Front-End Elements based in responses