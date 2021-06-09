readonly DIRNAME=src/api/grpc/generated
rm -rf $DIRNAME 
mkdir -p $DIRNAME
./node_modules/grpc-tools/bin/protoc --js_out=import_style=commonjs:./$DIRNAME --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./$DIRNAME \
    --plugin=protoc-gen-grpc-web=./node_modules/.bin/protoc-gen-grpc-web -I ./proto $(find ./proto/ -iname '*.proto')
