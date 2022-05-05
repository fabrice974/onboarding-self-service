# onboarding-self-service

# setup
 - npm install (download dependencies)
 - npm start (run the application)

 # blockers
 1) for react views inside /onboarding-client/src, the framework by default doesn't allow to reach modules outside /src folder since it's not a good pattern:
    https://github.com/facebook/create-react-app/issues/834
    blocker is how to reach services that will be in the root folder of the solution?
        - one possible way is to use a node server along with react:
            https://www.newline.co/fullstack-react/articles/using-create-react-app-with-a-server/