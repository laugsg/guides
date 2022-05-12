# Front-End Logic
The layout holds the HTML skeleton structure and few placeholders for page specific data.

When a user requests an RLP page, the template is resolved by extending the layout and all placeholders are replaced with actual HTML.

Usually a simple change needs to be propagated on all places at the same time.

Reborn has only one master template that is used for different page types and only one RLP layout that is used on all clients.

A theme will handle all unified and streamlined code. 

The new system unifies all things that use to be shared between different page types. This includes the <head> elements, the body client JavaScript, the header and footer components, as well, the old in-house consent management tool (for clients that are not yet migrated to the new CMP).





# Working phases for Retailer landing pages
From [Working phases for Retailer landing pages](https://cuponation.atlassian.net/wiki/spaces/OPE/pages/2943418388/Working+phases+for+Retailer+landing+pages) Confluence page

1. Phase One: 
   * First thing, we will move a client to the new theming concept as a primary step when resolving a templates and widgets. 
   * Our goal is to have only one master template that is used for different page types and only one RLP layout that is used on all clients.
2. Phase Two: 
   * In this phase we will be looking for the common denominators of all three themes.
   * Our goal is to centralise the place from where the new theme reads each element building a centralised place from where the components are resolved.
   * Be guided by the following rule:
     * if the element is already structured as widget - do nothing.
     * if the element is a macro or a inlined template - move it as a “widget” under new_theme/widgets folder and resolve it as a partial template in /retailers/new-retailer-view.njk.
   * As last step in this phase we will create a configuration on the order of resolvent of the components in each container.
3. Phase 3: 
   * With the end of the first 2 phases we have 4 new templates to handle and a config method
     * 1 master template and
     * 3 RLP layouts,
     * a configurable way for resolving components in each container.
4. Phase 4:
   * each component of the RLP will be re-built in the scope of the design system
   * the complexity of handling different HTML for the same component in different themes will be reduced to have only one HTML.
   * At the end of this phase all components should be available to the design system.
5. Phase 5:
   * enable the new layout
   * enable partner in design system
   * remove all legacy related RLP logic













