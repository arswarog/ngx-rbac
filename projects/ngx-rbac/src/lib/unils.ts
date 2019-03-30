import { ActivatedRouteSnapshot, UrlSegment } from '@angular/router';

export function activatedRouteSnapshotToFullPath(route: ActivatedRouteSnapshot): string {
    return segmentsToPath(route.pathFromRoot);
}

export function activatedRouteSnapshotToRootPath(route: ActivatedRouteSnapshot): string {
    return segmentsToPath(route.pathFromRoot, route.url);
}

export function segmentsToPath(root: ActivatedRouteSnapshot[], minus?: UrlSegment[]): string {
    const path: UrlSegment[] = [];

    root.forEach(item => item.url.forEach(url => path.push(url)));

    // console.log(path, minus);

    if (minus)
        path.length = path.length - minus.length;

    return '/' + path.map(item => item.toString()).join('/');
}
