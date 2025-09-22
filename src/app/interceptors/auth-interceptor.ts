import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Interceptor está rodando!'); 
  const token = localStorage.getItem('accessToken');
  console.log('Token encontrado:', token); 

  if(!token){
    return next(req);
  }

  const clonedReq = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${token}`)
  });

  return next(clonedReq);
};
