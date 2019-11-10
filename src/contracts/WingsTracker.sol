pragma solidity >=0.5.0;

// To Do:
// 1. Define roles and access:
//     Jump Master
//     Paratrooper
//     Issuing Authority
// 2. Issue Canadian parachute wings to foreign paratrooper (based on 2/3) **how do I auto collect this info???
//     a. Cdn parachute
//     b. Cdn aircraft
//     c. Dispatched by Cdn JM
// 3. Verify issuance - anyone can put in a paratrooper ID and confirm they have received Canadian jump wings
// 3a. Get details of the jump - DZ, Operation, Trg Ex, Date, Type of Aircraft, Type of Chute
// 4. Real-time statistics:
//     a. Total number of wings issued
//     b. Total number of wings issued by country
//     c. Total number of wings issued from time x to time y
//     d. Graphical trend of issuances

// import statements
import "@openzeppelin/contracts/access/Roles.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/ownership/Ownable.sol";

// interfaces

// libraries

// Contracts
contract WingsTracker is Ownable {

    using Roles for Roles.Role;
    using SafeMath for uint256;

    Roles.Role private _soldier;
    Roles.Role private _jumpMaster;
    Roles.Role private _trainingEstablishment;

    // Type declarations

    struct Soldier {
        uint soldierId;
        address soldierAddress;
    }

    struct TrainingEstablishment {
        uint establishmentId;
        address establishmentAddress;
    }

    // State variables

    Soldier[] public soldiers;
    TrainingEstablishment[] public trainingEstablishments;

    mapping(address=>bool) public jumpMaster;
    mapping(address=>bool) public enlisted;
    mapping(address=>bool) public wings;
    mapping(address=>bool) public trainingEstablishment;

    // Events
    event SoldierEnlisted(uint soldierId, address soldierAddress);
    event SoldierDelisted(address soldierAddress);
    event JumpMasterAuthorized(address soldierAddress);
    event TrainingEstablishmentIdentified(uint establishmentId, address establishmentAddress);
    event WingsIssued(address soldierAddress);
    event WingsRevoked(address soldierAddress);

    //Functions
    constructor() public {
    }

    // kill the contract
    function terminateWingsTracker() public onlyOwner {
        selfdestruct(msg.sender);
    }

    function() external {
        //...
    }

    // External functions
    // ...

    // External functions that are view
    // ...

    // External functions that are pure
    // ...

    // Public functions
    // ...

    // Creation Functions

    // Enlist Soldier
    function enlistSoldier(address soldierAddress) public {
        require(enlisted[soldierAddress] != true, "Already Enlisted");
        uint256 soldierId = soldiers.length; // generates unique soldierId
        soldiers.push(Soldier(soldierId, soldierAddress));
        _assignSoldierRole(soldierAddress);
        enlisted[soldierAddress] = true;
        emit SoldierEnlisted(soldierId, soldierAddress);
    }

    // Delist Soldier
    function delistSoldier(address soldierAddress) public {
        require(enlisted[soldierAddress] == true, "Already Delisted");
        _removeSoldierRole(soldierAddress);
        enlisted[soldierAddress] = false;
        emit SoldierDelisted(soldierAddress);
    }

    function issueWings(address soldierAddress) public {
        require(wings[soldierAddress] != true, 'Already Been Issued Wings');
        require(_jumpMaster.has(msg.sender), "Is_Not_A_JumpMaster");
        wings[soldierAddress] = true;
        emit WingsIssued(soldierAddress);
    }

    function revokeWings(address soldierAddress) public {
        require(wings[soldierAddress] == true, 'Does Not Have Wings');
        require(_trainingEstablishment.has(msg.sender), "Is_Not_A_Training_Authority");
        wings[soldierAddress] = false;
        emit WingsRevoked(soldierAddress);
    }

    // Identify Training Establisment
    function identifyTrainingEstablishment(address establishmentAddress) public onlyOwner {
        uint256 establishmentId = trainingEstablishments.length; // generates unique establishmentId
        trainingEstablishments.push(TrainingEstablishment(establishmentId, establishmentAddress));
        _assignTrainingEstablishmentRole(establishmentAddress);
        trainingEstablishment[establishmentAddress] = true;
        emit TrainingEstablishmentIdentified(establishmentId, establishmentAddress);
    }

    function assignJumpMaster(address soldierAddress) public {
        require(_trainingEstablishment.has(msg.sender), "DOES_NOT_HAVE_TRAINING_ESTABLISHMENT_ROLE");
        _assignJumpMasterRole(soldierAddress);
        jumpMaster[soldierAddress] = true;
        emit JumpMasterAuthorized(soldierAddress);
    }

    // Internal functions
    // ...
    //

    function _assignSoldierRole(address soldierAddress) internal {
                _soldier.add(soldierAddress);
    }

    function _removeSoldierRole(address soldierAddress) internal {
                _soldier.remove(soldierAddress);
    }

    // assign training establishment role
    function _assignTrainingEstablishmentRole(address establishmentAddress) internal {
                _trainingEstablishment.add(establishmentAddress);
    }

    function _removeTrainingEstablishmentRole(address establishmentAddress) internal {
                _trainingEstablishment.remove(establishmentAddress);
    }

    // assign jump master role
    function _assignJumpMasterRole(address soldierAddress) internal {
                _jumpMaster.add(soldierAddress);
    }

    function _removeJumpMasterRole(address soldierAddress) internal {
                _jumpMaster.remove(soldierAddress);
    }


    // Private functions
    // ...

}