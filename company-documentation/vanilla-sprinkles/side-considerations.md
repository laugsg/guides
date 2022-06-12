# Side considerations 

About:

* About vanilla-extract
* About Contract & Themes previously defined
* About Sprinkles




### About vanilla-extract

From the perspective of the tool itself, vanilla-extract is simple to use but there are not many examples of use and behind the basics there aren't a big community that is building with it and at the same time showing their work as examples of the power of vanilla-extract . The lack of proficiently documented and large examples is compensated till a certain point with its simplicity.

The vanilla-extract documentation is not extense, there could be lacks of meaning where would not be totally clear How-To use it in a way that were totally server-side, espeificly creating contracts and themes the API is from client-side at, the same time this contracts/themes could be reused through Sprinkles in server-side, but not detailed information is provided about how this process is differentiated.

Conclusion, vanilla-extract is simple to use, not extensively documented, their community is uncertain, to find examples of implementation or detailed information about their methods could turn into not possible. The time-effor is straight linked to this factors that leads to a curve not continous. Finally a prediction about it could be "not exact" due the complexity to work with those conditions, but to have advanced developers and/or whom previously worked with vanilla-extract could help to gain speed in some parts of the process.

### About Contract & Themes previously defined

Contract and themes are setup with client-side API, which switch to server-side rendering It's Sprinkles implementation.

From this perspective, contract and themes are fully reusable. What It means the time-effort of building all the rules related to spacing as margin and padding could be saved reusing them from their contracts and themes to be reimplemented through Sprinkles.

At the opposite of this, in case that the recycling was not possible, Sprinkles allows to manually setup the styles.

Contracts and themes are very closely related concepts, in practical examples into a minimalistic environment, overlaping contracts which implemented in both client-side and server-side could leads to errors when the proyect is built. Which means that to reuse contracts in certain contexts requires a more carefull implementation than common and set the question about how difficult would be to maintain in the future growth.


### About Sprinkles
 
Sprinkles is not extensively documented, why/how is using client-side API to serve styles in server-side is not answered, information about how better performance is achieve to drive a decision between: reusing contracts/themes or write down the styles into Sprinkles, It's not provided.

Sprinkles itself is simple, similar to client-side API in the way its implemented. Specific use cases could be found in ther documentation.

It allows to reuse contracts/themes but values could be inserted by hand. From this perspective, Sprinkles is a good tool to achieve the client to server movement of styles, time-effort is positive: the tool would never discarded at short/middle term, it support the reuse of previuos code but if to reuse It become to be not so good idea, then It' provide write-by-hand option to move forward on deployment.


