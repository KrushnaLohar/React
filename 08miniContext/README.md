<!--  -->
Context API:
prop drilling
In inital days if   we want to pass the data to inner component of web then we need to pass through from its higher function Ex: App->Home->Dashboard->profile is tree structure of app
if I want to change profile name in profile then I need to pass profile name in all higheer fun to get data at profile
Due to this we pass data at func where that value has no use
Hence, context api is intruduced it tak value directly form global var or var wherre it will be stored hence middlle man will be  removed

Redux used for state managment


step 1:
create context->UserContext.js->const UserContext = createContext() -> export default
Context gives a provider 
step 2:
create context->UserContextProvider.jsx -> pass 2 value 
    user for getting data in component->Profile.jsx and 
    setUser for setting user data in Compontnent->login.jsx

step 3: 
    set custom tag of profile and login in usercontextProvider

In login for form submit use handleSubmit method which set value of username and password in setuser
setuser can be called using usercontext