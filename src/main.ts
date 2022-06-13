import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as hbs from 'hbs';
import * as hbsUtil from 'hbs-utils';
import * as session from 'express-session';
import { env } from 'process';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  hbs.registerPartials(join(__dirname, '..', 'views/layouts'));
  hbsUtil(hbs).registerWatchedPartials(join(__dirname, '..', 'views/layouts'));
  app.setViewEngine('hbs');
  app.enableCors();

  app.use(
    session({
      secret: env.SECRET,
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.use((req: any, res: any, next: () => void) => {
    res.locals.session = req.session;
    const flashErrors: string[] = req.session.flashErrors;
    if (flashErrors) {
      res.locals.flashErrors = flashErrors;
      req.session.flashErrors = null;
    }
    next();
  });

  app.use(
    '/admin*',
    (
      req: { session: { user: { role: string } } },
      res: { redirect: (arg0: string) => void },
      next: () => void,
    ) => {
      if (req.session.user && req.session.user.role === 'admin') {
        // if condition is TRUE do something
        next();
      } else {
        // do something else
        res.redirect('/');
      }
    },
  );

  await app.listen(3000);
}
bootstrap();
