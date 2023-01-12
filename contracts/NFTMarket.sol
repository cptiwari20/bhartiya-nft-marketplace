pragma solidity ^0.8.17;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract NFTMarket is ERC721URIStorage{
    constructor() ERC721("BhartiyaNFT", "CNFT"){

    }
}