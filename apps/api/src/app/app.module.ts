import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {BookModule} from "../book/book.module";
import {MongooseModule} from "@nestjs/mongoose";

const username = 'brieuc';
const password = 'MaXwlna5Y1H75pSG';
const host = 'cluster0.fe3mq.mongodb.net';
const databaseName = 'library';
const mongoDbUri = `mongodb+srv://${username}:${password}@${host}/${databaseName}`;
const mongoDbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

@Module({
  imports: [BookModule, MongooseModule.forRoot(mongoDbUri, mongoDbOptions)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
