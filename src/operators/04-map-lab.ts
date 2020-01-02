import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

const text = document.createElement('div');
text.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis non ipsum id efficitur. Phasellus tristique aliquet arcu ac fringilla. Sed iaculis neque ut quam mollis, sed ullamcorper nisi semper. Vestibulum laoreet erat eget vehicula placerat. Aenean sollicitudin sagittis faucibus. Phasellus dignissim feugiat mauris, quis pharetra erat posuere ac. Maecenas maximus finibus massa et hendrerit. Praesent vehicula euismod velit, at iaculis augue molestie et. Sed venenatis velit ut arcu feugiat vulputate. Pellentesque ac justo ultrices, pharetra nisl quis, luctus turpis. Integer erat nisi, porta sit amet turpis a, feugiat sodales velit. Nam sit amet neque ac velit laoreet auctor vel id magna. Proin dolor ligula, tristique dignissim ligula eget, vulputate ullamcorper purus. Vestibulum mollis consequat ante, nec sagittis nunc suscipit et. Fusce posuere auctor tristique.
<br></br>
Suspendisse cursus augue eu eros bibendum, ac iaculis justo ultricies. Duis id sem sem. In molestie ante tellus, quis fringilla nisl accumsan eget. Pellentesque ultricies, elit a euismod lobortis, libero ipsum bibendum orci, at luctus neque dolor non ex. Duis cursus augue vitae nisi dapibus interdum. Mauris pulvinar pharetra magna, sed mollis mi porta a. In hac habitasse platea dictumst. Fusce feugiat in tellus ut ornare. Praesent vel posuere quam, ac efficitur lorem. Aliquam interdum efficitur ligula at pretium. Ut eleifend condimentum mi pharetra laoreet. Curabitur laoreet ornare arcu, sed tempor massa viverra ut.
<br></br>
Maecenas eget dictum tortor. Aliquam pellentesque scelerisque tellus at luctus. Donec fringilla quis quam vel interdum. Nunc eget egestas felis. Donec ac purus at massa placerat interdum. Morbi scelerisque consequat purus. Mauris nec tortor egestas, pulvinar dolor sed, efficitur lacus.
<br></br>
Mauris sed urna id enim feugiat imperdiet. Aenean non condimentum dolor. Cras venenatis, lorem nec sagittis iaculis, neque sapien hendrerit ante, id dictum purus nibh et mauris. Nullam pellentesque odio sed urna faucibus vestibulum. Sed eu pulvinar odio. Sed quis imperdiet elit, ac ornare leo. Curabitur ullamcorper, nunc bibendum vehicula vehicula, odio dolor commodo justo, quis egestas quam erat quis risus. Proin sed accumsan elit. Nunc ac velit vitae metus varius auctor. Etiam aliquam sapien ac posuere tristique.
<br></br>
Donec dictum dolor non ante posuere, a consequat sapien iaculis. Praesent venenatis, enim non eleifend scelerisque, nunc justo scelerisque nisi, non tincidunt nunc eros at ante. Curabitur lacinia sed lectus ut venenatis. Quisque urna est, dictum eget massa non, porttitor eleifend nisi. Ut blandit quis quam sit amet condimentum. Maecenas eu purus est. Aenean eu auctor purus. Praesent facilisis odio et lorem convallis luctus. Sed quis lacus at dolor mattis venenatis. Suspendisse potenti. Donec pellentesque dui at massa efficitur gravida.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis non ipsum id efficitur. Phasellus tristique aliquet arcu ac fringilla. Sed iaculis neque ut quam mollis, sed ullamcorper nisi semper. Vestibulum laoreet erat eget vehicula placerat. Aenean sollicitudin sagittis faucibus. Phasellus dignissim feugiat mauris, quis pharetra erat posuere ac. Maecenas maximus finibus massa et hendrerit. Praesent vehicula euismod velit, at iaculis augue molestie et. Sed venenatis velit ut arcu feugiat vulputate. Pellentesque ac justo ultrices, pharetra nisl quis, luctus turpis. Integer erat nisi, porta sit amet turpis a, feugiat sodales velit. Nam sit amet neque ac velit laoreet auctor vel id magna. Proin dolor ligula, tristique dignissim ligula eget, vulputate ullamcorper purus. Vestibulum mollis consequat ante, nec sagittis nunc suscipit et. Fusce posuere auctor tristique.
<br></br>
Suspendisse cursus augue eu eros bibendum, ac iaculis justo ultricies. Duis id sem sem. In molestie ante tellus, quis fringilla nisl accumsan eget. Pellentesque ultricies, elit a euismod lobortis, libero ipsum bibendum orci, at luctus neque dolor non ex. Duis cursus augue vitae nisi dapibus interdum. Mauris pulvinar pharetra magna, sed mollis mi porta a. In hac habitasse platea dictumst. Fusce feugiat in tellus ut ornare. Praesent vel posuere quam, ac efficitur lorem. Aliquam interdum efficitur ligula at pretium. Ut eleifend condimentum mi pharetra laoreet. Curabitur laoreet ornare arcu, sed tempor massa viverra ut.
<br></br>
Maecenas eget dictum tortor. Aliquam pellentesque scelerisque tellus at luctus. Donec fringilla quis quam vel interdum. Nunc eget egestas felis. Donec ac purus at massa placerat interdum. Morbi scelerisque consequat purus. Mauris nec tortor egestas, pulvinar dolor sed, efficitur lacus.
<br></br>
Mauris sed urna id enim feugiat imperdiet. Aenean non condimentum dolor. Cras venenatis, lorem nec sagittis iaculis, neque sapien hendrerit ante, id dictum purus nibh et mauris. Nullam pellentesque odio sed urna faucibus vestibulum. Sed eu pulvinar odio. Sed quis imperdiet elit, ac ornare leo. Curabitur ullamcorper, nunc bibendum vehicula vehicula, odio dolor commodo justo, quis egestas quam erat quis risus. Proin sed accumsan elit. Nunc ac velit vitae metus varius auctor. Etiam aliquam sapien ac posuere tristique.
<br></br>
Donec dictum dolor non ante posuere, a consequat sapien iaculis. Praesent venenatis, enim non eleifend scelerisque, nunc justo scelerisque nisi, non tincidunt nunc eros at ante. Curabitur lacinia sed lectus ut venenatis. Quisque urna est, dictum eget massa non, porttitor eleifend nisi. Ut blandit quis quam sit amet condimentum. Maecenas eu purus est. Aenean eu auctor purus. Praesent facilisis odio et lorem convallis luctus. Sed quis lacus at dolor mattis venenatis. Suspendisse potenti. Donec pellentesque dui at massa efficitur gravida.`

const body = document.querySelector('body');

body.append(text);

const progressBar = document.createElement('div');

progressBar.setAttribute('class', 'progress-bar');

body.append(progressBar);

const scroll$ = fromEvent(document, 'scroll');

scroll$.subscribe(console.log)

const getScrollPercent = (event: Event) => {
    const { scrollTop, scrollHeight, clientHeight } = event.target['documentElement'];
    return (scrollTop / (scrollHeight - clientHeight)) * 100
};

const progress$ = scroll$.pipe(
    map((event: Event) => {
        return getScrollPercent(event)
    })
);

progress$.subscribe((percent: number) => {
    progressBar.style.width = `${percent}%`
}) 