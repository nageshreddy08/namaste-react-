# namaste-react-
This is git repo for React.js application by Namaste React.
Author-Nagesh


## Error Handling for Parcel
Whenever facing this error-> 
# Error: Expected content key de1e4a02ec63c4eb to exist
      at nullthrows (F:\react\node_modules\nullthrows\nullthrows.js:7:15
# use this command->Remove-Item -Recurse -Force .parcel-cache
# and use npm start
# Go to this page for more info:https://stackoverflow.com/questions/77166144/error-expected-content-key-de1e4a02ec63c4eb-to-exist-getting-this-error-in-reac

# Imp Points to remember:
//Component Composition->Calling one component inside another component.
<! -- Comments: To access js, we have to use type="module" and JS file path -->
-->Whenever state variable (useState) updates, react triggers a reconciliation cycle(means it re-renders the component)