import { UserRepo, User } from '../../../store/user/types';

export interface RepositoryProps {
  repository: UserRepo;
  user: User;
}
