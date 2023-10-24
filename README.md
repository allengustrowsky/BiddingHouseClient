# Auction House - Client

The client of an app that creates a virtual auction space where connected users can create auctions and bid/purchase items from other users.  Live updates are achieved with web sockets.  The server can be found [here](https://github.com/allengustrowsky/BiddingHouseServer).

## Setup
### Deployed Version
If you don't want to set up the client manually, the deployed web version can be accessed [here](https://auctionhouseclient.netlify.app/).

### Manual Setup
- Setup the [server](https://github.com/allengustrowsky/BiddingHouseServer) first.
- Install dependencies (e.g., `yarn`)
- Start the server: `yarn start` or `npm run start`

## Usage Notes
- On the initial screen, `IP` and `Port` are the IP and Port of the server.  The Port can be easily configured in the server code.
- The app flow is fairly straightforward. Error reporting will help guide users as well.