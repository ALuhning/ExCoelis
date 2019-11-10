This project started on 8 Nov 19 as my hackathon submission for EthWaterloo 2.  Excellent event.

## BACKGROUND
The Canadian Army Advanced Warfare Center (CAAWC) is the functional center of excellence (FCoE) for airborne operations (parachuting) in the Canadian Armed Forces.  Often, Canadian Army paratroopers are invited to participate in airborne training with other nations.  It is customary for Canadian paratroopers to be awarded foreign jump wings when he/she is dispatched by a foreign nation’s jumpmaster, jumping a foreign nation's parachute from a foreign nation's aircraft.  The same applies for foreign soldiers parachuting in Canada.

Why is it named ExCoelis?  Ex Coelis is Latin for _ From the Clouds _.  It's CAAWC's motto.

## REASON FOR BUILDING
As FCoE, it is our responsibility to track who receives Canadian jump wings, when, under what circumstances, etc…  Our current methods for tracking are currently ineffective for several reasons:

1.  Occasionally foreign troops jump in or with Canadians and the CAAWC is never notified;
2.  The senior jumper forgets to send/or is not aware they need to send the CAAWC the information
3.  When we do get the info, we lack a robust system of tracking (typically Excel)
4.  Given the haphazard method of tracking, real possibility the data can be lost forever
5.  The data is manually input and thus suffers from data integrity issues
6.  Verification is labour intensive - must search a spreadsheet to confirm if a soldier has been awarded the wings
7.  Verification requires the inquiring party to contact the CAAWC directly via phone or email to make the verification

In short, it's super inefficient and given that Canadian parachute wings are highly coveted, there is a high probability that certain soldiers foreign and domestic are wearing wings they have not earned (trust issues).

As the current Commanding Officer for the CAAWC, I'm very aware of the nuances and processes that need to be addressed to adequately solve this problem and saw this as a real-world problem that a dApp can potentially solve.

## WHAT IT CAN CURRENTLY DO
The dApp still needs a lot of work.  All it can do at the moment is assign roles to the three main types of people that will use the app:  paratroopers, jumpmasters, and the CAAWC (Training Establishment).  It logs events when soldiers or orgs are added/removed from each of these roles and it is keeping track of quals.  For instance, right now:

a. Paratroopers and enlist or delist themselves from the app (buttons under the address)
b. The contract owner can assign rights as training establishments
c. Jumpmasters can issue wings to paratroopers

It is only keeping track of addresses at the moment - but it does prove the solution to be viable.

## NEXT STEPS

From here I will be:

1. Integrating with ENS to get rid of the long addresses
2. Considering issuance of an ERC721 token that keeps track of some more data concerning the wings issue to include: type of aircraft, type of parachute, drop zone, altitude, nation, training/operational jump, etc...
3. Obviously working on the UX (once I figure out how React/Redux work a lot better)
4. Introducing some logic that will automatically assign wings when conditions are met vice having jumpmasters insert user addresses.  For instance, I see a situation where sensors on our chutes can determine who is wearing them, what type of aircraft they exit, where, etc... Would like that info to automatically be sent to the smart contract and when 2/3 conditions are met, the wings are awarded without jumpmaster intervention
5.  Expansion to include challenge coins, additional qualifications, and more.

## CONCLUSION
Worked hard, learned a lot, long ways to go.  Great experience.
