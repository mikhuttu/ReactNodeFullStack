BACKEND_PATH=../NodeDevelopment

echo "Deleting frontend build directory $BACKEND_PATH/frontend-build"
rm -rf $BACKEND_PATH/frontend-build

echo "Creating a build from the React application.."
cd test
npm run build
cd ..
echo "React application build created"

echo "Copying ./test/build into $BACKEND_PATH"
cp -r ./test/build $BACKEND_PATH

echo "Renaming $BACKEND_PATH/build into $BACKEND_PATH/frontend-build"
mv $BACKEND_PATH/build $BACKEND_PATH/frontend-build
