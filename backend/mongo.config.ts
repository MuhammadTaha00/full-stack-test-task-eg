import { ConfigService } from '@nestjs/config';


export const mongooseConfig = async (configService: ConfigService) => ({
  uri: configService.get<string>('DATABASE_URL'),
});
